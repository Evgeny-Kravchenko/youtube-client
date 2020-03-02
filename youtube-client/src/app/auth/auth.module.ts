import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from '@youtube/auth/components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '@youtube/auth/services/authentication.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  providers: [AuthenticationService],
})
export class AuthModule {}
