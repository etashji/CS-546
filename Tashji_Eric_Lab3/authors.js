import axios from "axios";

async function getAuthors() {
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json');
    return data.data;
}

const getAuthorById = async (id) => {
    let data = await getAuthors();
    return data;
};

const searchAuthorsByAge = async (age) => {};

const getBooksByState = async (state) => {};

const searchAuthorsByHometown = async (town, state) => {};

const getAuthorBooks = async (authorid) => {};

export {getAuthors, getAuthorById, searchAuthorsByAge, getBooksByState, searchAuthorsByHometown, getAuthorBooks };
