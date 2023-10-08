/* eslint-disable react/prop-types */
// import QuoteForm from "./QuoteForm";
import TextCard from "./TextCard";


export default function Home({ quotes }) {
    return (
        <>
            {quotes.map((quote, index) => (
                <TextCard key={index} text={quote} />
            ))}
        </>
    );
}
