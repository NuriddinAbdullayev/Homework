// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";

// @Injectable()
// export class JwtAuthGuard implements CanActivate{
//   constructor(private jwtService: JwtService) {}

//   canActivate(context: ExecutionContext): boolean {
//     const request = context.switchToHttp().getRequest();

//     const authHeader = request.headers.authorization;

//     if(!authHeader) {
//       throw new UnauthorizedException("Token is missing!"); 
//     } 

//     const token = authHeader.split(' ')[1];

//     try{
//       this.jwtService.verify(token);

//       return true;
//     } catch {
//       throw new UnauthorizedException("Invalid token!");
//     }
//   }
// }


import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException("Token is missing!"); 
    } 

    // 1. Properly splits the 'Bearer <token>' string using a space
    const token = authHeader.split(' ')[1]; 
    if (!token) {
      throw new UnauthorizedException("Token structure is invalid!");
    }

    try {
      const decoded = this.jwtService.verify(token, { secret: 'my-secret-key' });
      
      request.user = decoded; 
      
      return true;
    } catch (err) {
      throw new UnauthorizedException("Invalid token!");
    }
  }
}