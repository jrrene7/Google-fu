import Image from "next/image";

function Avatar({url, className}) {
    return (
        <Image 
        className={`h-10 rounded-full cursor-pointer transition 
            duration-150 transform hover:scale-110 ${className}`}
        loading="lazy"
        height={50}
        width={50}
        src={url}
        alt="profile pic"
        
        />
    )
}

export default Avatar
