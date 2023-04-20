import ReactGA4 from "react-ga4";
import supportButtonClick from "@site/src/utils/google-analytics/events/supportButtonClick";

const SUPPORT_BUTTON_CLICK = 'support_button_click';

export class GoogleAnalyticsTracker {
    containerId: string;

    constructor(trackerId: string) {
        this.containerId = trackerId;
        this._init();
    }

    private _init() {
        ReactGA4.initialize(this.containerId);
    }

    customEvent(
        event: string,
        category: string,
        action: string,
        label?: string
    ): void {
        ReactGA4.event(event, {category: category, action: action, label: label});
    }

    supportButtonClick(): void {
        ReactGA4.event(SUPPORT_BUTTON_CLICK, supportButtonClick);
    }
}

export default GoogleAnalyticsTracker;
