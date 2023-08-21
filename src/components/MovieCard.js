const MovieCard = (props) => {  
    if (props.movie.duration_seconds > props.minDuration) {
        return (
            <div class="movieItem" key={ props.movie.id }>
                <a href="#">
                    <img src={`https://picsum.photos/200/300?random=${props.movie.id}`} alt="Flowers" />
                    <span class="details">
                        <span class="title">{ props.movie.title }</span>
                        <span class="seconds">({ props.movie.duration_seconds } Seconds)</span>
                        <span class="shortDesc">{ props.movie.short_description }</span>
                    </span>
                </a>
            </div>
        )
    }
}

export default MovieCard;