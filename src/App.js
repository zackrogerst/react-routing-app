import { Route, Routes, Navigate, Link } from "react-router-dom";

import AllQuotes from "./screens/AllQuotes";
import QuoteDetail from "./screens/QuoteDetail";
import NewQuote from "./screens/NewQuote";
import NotFound from "./screens/NotFound";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate replace to="/quotes" />} />

				<Route path="/quotes" element={<AllQuotes />} />

				<Route path="/quotes/:quoteId" element={<QuoteDetail />}>
					<Route
						path=""
						element={
							<div className="centered">
								<Link className="btn--flat" to={`comments`}>
									Load Comments
								</Link>
							</div>
						}
					/>
					<Route path={`comments`} element={<Comments />} />
				</Route>

				<Route path="/new-quote" element={<NewQuote />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
