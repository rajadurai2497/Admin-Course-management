export class LoginResponseModel {
  accessToken: string;
  scope: string;
  nonce: string;
  tokenType: string;
  expiresIn: number;
  roles: string;
  userid: string;
  userName: string;
  errorDescription: string;
  error: string;
  isAuthenticationFailed: boolean;
  isAuthorize: boolean;
  roleID: number;
  phoneNumber: string;
  firstName: string;
}
