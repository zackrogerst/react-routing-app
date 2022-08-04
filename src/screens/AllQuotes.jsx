import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{ id: "q1", author: "James", text: "Learning React" },
	{ id: "q2", author: "John", text: "Lorem Ipsum" },
	{ id: "q3", author: "Bob", text: "Hello World" }
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
