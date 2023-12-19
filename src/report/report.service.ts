import { Injectable } from '@nestjs/common';
import { Browser,Page, launch } from 'puppeteer'
import { renderFile } from 'ejs'
import * as path from 'path';

@Injectable()
export class ReportService {
  async renderReport<T>(reportData: T, template: string): Promise<Buffer> {
    const browser: Browser = await launch({ headless: 'new' });
    const [page]: Page[] = await browser.pages();
    const html: string = await renderFile(path.resolve(__dirname, '../', template), { report: reportData });

    await page.setContent(html);

    const buffer: Buffer = await page.pdf( { format: 'A4' });

    await browser.close();

    return buffer;
  }
}
