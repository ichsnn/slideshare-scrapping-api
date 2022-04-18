import axios from "axios"

export const Service = {
    fetchService: async (url: any) => {
        try {
            const response = await axios(url);
            return new Promise((resolve, reject) => {
                if (response.status === 200) resolve(response)
                reject(response)
            })
        } catch (error) {
            throw error;
        }
    }
}