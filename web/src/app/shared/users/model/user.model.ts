export class User {
  private id: number;
  public get Id(): number {
    return this.id;
  }
  public set Id(value: number) {
    this.id = value;
  }

  private email: string;
  public get Email(): string {
    return this.email;
  }
  public set Email(value: string) {
    this.email = value;
  }

  private password: string;
  public get Password(): string {
    return this.password;
  }
  public set Password(value: string) {
    this.password = value;
  }

  private firstName: string;
  public get FirstName(): string {
    return this.firstName;
  }
  public set FirstName(value: string) {
    this.firstName = value;
  }

  private lastName: string;
  public get LastName(): string {
    return this.lastName;
  }
  public set LastName(value: string) {
    this.lastName = value;
  }

  private accessToken: string;
  public get AccessToken(): string {
    return this.accessToken;
  }
  public set AccessToken(value: string) {
    this.accessToken = value;
  }
}
