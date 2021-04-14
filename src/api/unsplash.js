import axios from "axios";

export default axios.create({
    baseURL : "https://api.unsplash.com/",
    headers : {
        Authorization : "Client-ID X85M4OnKQ7TCFLClfh3T-y86aTHaMmTHiedsz5zJckI"
    }
})