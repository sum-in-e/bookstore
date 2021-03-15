import axios from 'axios';

export default async (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    axios.get("http://book.interpark.com/api/search.api", {
			params: {
				key: process.env.REACT_APP_API_KEY,
				query: req.body.item,
				output: 'json',
			},
		}).then(response => res.send(response.data))
}