export class CreateUserDto {
  readonly name: string;
  readonly password: string;
  readonly email: string;
}

export class ValidateUserDto {
  readonly password: string;
  readonly email: string;
}
