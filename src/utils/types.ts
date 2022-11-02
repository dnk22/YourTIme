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

export type TReminder = {
  id: string;
  name: string;
  description: string;
  category: string;
  targetDate: Date;
  targetTime: Date;
  repeat: string;
  alarmConfig: string;
  theme: string;
  ring: string;
  isPin: boolean;
  isImportant: boolean;
  dateCreated: Date;
};
