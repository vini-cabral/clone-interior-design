export interface IPackage {
  title: string | null,
  type: 'Projeto 2D' | 'Projeto 3D' | null
  supportTime: number | null
  auxService: string | null
  discount: number | null
  message: string | null
  price: number | null
}

export interface IDataPackages {
  basic: IPackage,
  premium: IPackage
}
