/**
 * File: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap/src/app/shared/models/user.interfacee.ts
 * Project: /Users/tonymedrano/Desktop/PROGRAMMING/ANGULAR/openweathermap
 * Created Date: Thursday, February 2nd 2023, 12:13:51 pm
 * Author: Tony Medrano
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2023 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  authdata?: string;
}
