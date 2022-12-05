export interface IPackage {
  type: 'Projeto 2D' | 'Projeto 3D'
  supportTime: number
  auxService: string
  discount: number
  message: string
  price: number
}

export interface IDataPackages {
  basic: IPackage,
  pro: IPackage
}
