export type AppState = {
  error: string | null,
  user: User | null,
  isOpenDialogChat: boolean,
  chats: Chat[],
  messages: [],
  currentChat: number,
  searchUsers: any,
  usersByChat: any,
  countUsersByChat:number,
}

//export type User = {
//  id: number;
//  login: string;
//  firstName: string;
//  secondName: string;
//  displayName: string;
//  avatar: string;
//  phone: string;
//  email: string;
//};

type LastMessage = {
  user: User,
  time: string,
  content: string
}

export type Chat = {
  id: number,
  title: string,
  avatar: Nullable<string>,
  unreadCount: number,
  lastMessage: LastMessage | null
}

export interface IChatUser {
  offset: number;
  limit: number;
  name: string;
  email: string;
}

export interface signInData {
  login: string;
  password: string;
}

export interface signUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface IChatUserInfo {
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}

export interface IUser {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
  id: number;
}
export type IUserProfileData = Omit<IUser, "id" | "avatar"> & {
  display_name: string;
};

export type IUserInfoData = {
  display_name: string;
} & IUser;

export interface IUserChangePassword {
  oldPassword: string;
  newPassword: string;
}

export interface IChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: ILastMessage;
}

export interface ILastMessage {
  user: IChatUserInfo;
  time: Date;
  content: string;
}
export interface IChatUserInfo {
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}
