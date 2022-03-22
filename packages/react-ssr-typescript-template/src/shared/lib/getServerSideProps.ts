export type GetServerSideProps<
  T extends { [key: string]: any } = { [key: string]: any }
> = () => Promise<{ props: T }>;
