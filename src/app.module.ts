import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ContactsModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    port: 5437,
    host: '127.0.0.1',
    username: 'postgres',
    password: 'password',
    database: 'nest',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
