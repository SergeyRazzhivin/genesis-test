import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import axios from 'axios';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async auth(@Res() res) {
    const clientId = '31992158';
    const headers = {
      'Content-Type': 'application/json',
      'X-Client-Id': clientId,
    };
    try {
      const { data } = await axios.get(
        `https://app2.gnzs.ru/amocrm/test/oauth/get-token.php?fil`,
        { headers },
      );
      res.cookie('access_token', data.access_token, { httpOnly: true });
      // res.cookie("base_domain", data.base_domain, {httpOnly: true});
      return res.json({});
    } catch (error) {
      throw error;
    }
  }

  @Post('create-deal')
  async createDeal(@Body() body, @Req() req) {
    const token = req.cookies.access_token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Client-Id': 31992158,
      },
    };
    try {
      const response = await axios.post(
        'https://amocrmgnzstesttask.amocrm.ru/api/v4/leads',
        body,
        config,
      );
      return response.data;
    } catch (error) {
      console.error('AmoCRM API error:', error.response?.data || error.message);
      throw error;
    }
  }

  @Post('create-contact')
  async createContact(@Body() body, @Req() req) {
    const token = req.cookies.access_token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Client-Id': 31992158,
      },
    };
    try {
      const response = await axios.post(
        'https://amocrmgnzstesttask.amocrm.ru/api/v4/contacts',
        body,
        config,
      );
      return response.data;
    } catch (error) {
      console.error('AmoCRM API error:', error.response?.data || error.message);
      throw error;
    }
  }

  @Post('create-company')
  async createCompany(@Body() body, @Req() req) {
    const token = req.cookies.access_token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Client-Id': 31992158,
      },
    };
    try {
      const response = await axios.post(
        'https://amocrmgnzstesttask.amocrm.ru/api/v4/companies',
        body,
        config,
      );
      return response.data;
    } catch (error) {
      console.error('AmoCRM API error:', error.response?.data || error.message);
      throw error;
    }
  }
}
