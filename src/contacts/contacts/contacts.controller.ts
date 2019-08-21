import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Contact } from '../contacts/contact.entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {

    constructor(private contactService: ContactsService){}

    @Get()
    index(): Promise<Contact[]> {
        return this.contactService.findAll();
    }

    @Post('create')
    async create(@Body() contactData: Contact): Promise<any> {
        return this.contactService.create(contactData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        // tslint:disable-next-line: no-console
        console.log('Update #' + contactData.id);
        return this.contactService.update(contactData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.contactService.delete(id);
    }
}
