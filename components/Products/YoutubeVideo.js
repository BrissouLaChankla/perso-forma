
export default function YouTubeVideo({ url }) {
    return (
        <iframe className="w-full aspect-video"  src={url} title="Video Brice Eliasse" frameBorder="0" allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    );
}
