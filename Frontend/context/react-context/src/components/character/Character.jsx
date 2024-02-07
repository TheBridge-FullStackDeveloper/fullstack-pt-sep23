export const Character = (props) => {
	return (
		<div>
			<h2>{props.nombre}</h2>
			<img src={props.image} alt={props.nombre} />
		</div>
	)
}
