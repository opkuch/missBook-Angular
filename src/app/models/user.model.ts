export class UserModel {
    constructor(
        public uid: string | null,
        public email: string | null,
        public displayName: string | null,
        public password?: string | null,
        ) {
    }
  
  }
  