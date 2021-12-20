<script>
	let notif_arr = [];
	import socket from './sock.js'
	socket.on('tb_notification', function(incoming_obj){
		console.log('tb_notification')
    	console.log(incoming_obj)
		notif_arr = [incoming_obj, ...notif_arr]
	})
</script>

<main>
	<h1>Socket.io test</h1>
	<ul>
		{#each notif_arr as notification}
		<li>
			{notification.n_type}
		</li>
		{/each}
	</ul>
</main>

