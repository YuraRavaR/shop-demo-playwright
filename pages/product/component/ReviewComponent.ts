import { expect } from "@playwright/test";
import { BaseComponent } from "../../../component/BaseComponent";

export class ReviewComponent extends BaseComponent {
    starRating = (star: number) => this.page.locator(`.react-stars [data-index="${star}"] .fa-star`);
    titleInput = this.page.getByPlaceholder('Enter Review title');
    commentInput = this.page.getByPlaceholder('Write Review');
    publishButton = this.page.getByRole('button', { name: 'Publish Review' });


    async expectLoaded(): Promise<void> {
        await expect(this.starRating(0)).toBeVisible();
        await expect(this.starRating(4)).toBeVisible();
        await expect(this.titleInput).toBeVisible();
        await expect(this.commentInput).toBeVisible();
        await expect(this.publishButton).toBeVisible();
    }

    async add(options: { title: string, comment: string, stars: number }) {
        await this.expectLoaded();
        if (options.stars < 0 || options.stars > 4) throw new Error('Stars should be between 0 and 4');

        await this.titleInput.fill(options.title);
        await this.commentInput.fill(options.comment);
        await this.starRating(options.stars).click();
        await this.publishButton.click();
    }

    async expectReviewAdded() {
        await expect(this.page.getByRole('heading', { name: 'Your review has been added' })).toBeVisible();
    }
}