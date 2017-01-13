import {Component} from "angular2/core";
import {Config} from "./config.service";
import {Video} from "./video";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: "my-app",
    templateUrl: "app/templates/app.component.html",
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "The Shawshank Redemption", "6hB3S9bIaco", "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."),
            new Video(2, "A Beautiful Mind", "WFJgUm7iOKw", "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish."),
            new Video(3, "The Truman Show", "loTIzXAS7v4", "An insurance salesman/adjuster discovers his entire life is actually a television show.")
        ];
    }
}
