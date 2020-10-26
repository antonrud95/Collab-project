export interface HeroType {
  id: string
  title: string
  subtitle: string
  image: {
    childImageSharp: any
  }
}

export interface Hero {
  allStrapiHeroes: {
    nodes: HeroType[]
  }
}
