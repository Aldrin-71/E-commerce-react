import React from "react"
import ImageCard from "../../../../components/ui/card"


export default function CardList() {
    return (
        <div style={containerStyle}>
            <ImageCard
            image="https://galaxypfp.com/wp-content/uploads/2025/12/Yuji-smile-pfp.jpg"
            title="Milk way Galaxy"
            description="A Galaxy."
            />
            
            <ImageCard
            image="https://galaxypfp.com/wp-content/uploads/2025/12/Yuji-smile-pfp.jpg"
            title="jacob laki tite"
            description="Wala."
            />

            <ImageCard
            image="https://galaxypfp.com/wp-content/uploads/2025/12/Yuji-smile-pfp.jpg"
            title="Jacob laki buto"
            description="Wala"
            />

        </div>
    )
}

const containerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexwrap: "wrap",
    padding: "40px",
};