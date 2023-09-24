import axios from "axios";

const uploadPic = async(media) => {
    try {
        const form = new FormData();
        form.append("file", media);
        form.append("upload_preset", "workAf");
        form.append("cloud_name", "dgihxktju");

        const res = await axios.post(`${process.env.CLOUDINARY_URL}`, form);
        console.log(res.data.secure_url)
        return res.data.secure_url;
    } catch (error) {
        return error;
    }
};

export default uploadPic;