import Repository from "./repository.js";

class LivrosRepository extends Repository {
    constructor() {
        super('livro');
    }
}

export default LivrosRepository;