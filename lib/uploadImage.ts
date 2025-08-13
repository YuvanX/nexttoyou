import { supabase } from "./supabaseClient";

export async function uploadImage(file: File) {
    try {
        const fileExt = file.name.split(".").pop()
        const fileName = `${Date.now()}.${fileExt}`
        const filePath = `uploads/${fileName}`

        const { error } = await supabase.storage.from("images").upload(filePath, file, {
            cacheControl: "3600",
            upsert: false
        });

        if(error) throw error;

        const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(filePath)

        return publicUrl;

    } catch (error) {
        console.log(error);
        return null;
    }
}