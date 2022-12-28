export type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type TDimensionsType = {
  deviceWidth?: number;
  deviceHeight?: number;
  button: {
    height: number;
    borderRadius: number;
  };
  image: {
    icon: number;
    avatar: number;
  };
};

export interface AlertItemProps {
  id: string;
  name?: string;
  value: number;
  type: string;
  default?: boolean;
}

export interface AddAlertItemProps {
  value: number;
  type: string;
}
