import mongoose from "mongoose";

export const connectDb = async () => {
	try {
		const connect = await mongoose.connect('mongodb+srv://deep:deep@cluster0.xuwb6.mongodb.net/?retryWrites=true&w=majority');
		console.log("DATABASE CONNECTED", connect.connection.name);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
