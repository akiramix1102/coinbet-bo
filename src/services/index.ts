import AuthRepository from './AuthReposetory'
type RepositoryName = 'auth'

export default function getRepository(name: RepositoryName): any {
  switch (name) {
    case 'auth':
      return new AuthRepository()
  }
}
