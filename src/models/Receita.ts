import { ObjectId } from "mongodb";

export default class Receita {
    constructor(
        public name: string,
        public ingredients:Array<String>,
        public preparation: String,
        public recipeAuthor:{}, 
        public id?: ObjectId) { }
}
