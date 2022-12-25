export interface ICharacter {
    id: number
    name: string
    status: string
    species?: string
    gender: string
    image: string
}

export interface Props {
    character: ICharacter;
  }

