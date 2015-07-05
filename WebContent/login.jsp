<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%session.invalidate();%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Cache-Control"
	content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description"
		content="SISTEMA DE VALIDAÇÃO PARA ENTREGA DO ECF" />
	<meta name="author" content="Cristiano Franquilino" />
	
	<link rel="shortcut icon" href="resources/img/favicon.png" />

	<title>BISmart Fiscal - Validador ECF</title>
	
	<!-- Bootstrap core CSS -->
	<link href="resources/css/bootstrap.min.css" rel="stylesheet"
		media="screen" />
	
	<!-- Defout core CSS -->
	<link href="resources/css/style.css" rel="stylesheet" media="screen" />

	<link href="resources/font-awesome/3.1.1/css/font-awesome.css"
		rel="stylesheet" />
	<!--[if IE 7]>
       <link rel="stylesheet" href="resources/css/font-awesome-ie7.min.css" />
    <![endif]-->

	<!-- Custom styles for this template -->
	<link href="resources/css/jumbotron.css" rel="stylesheet" />
	<link href="resources/css/signin.css" rel="stylesheet" />

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
       <script src="resources/js/html5shiv.js"></script>
       <script src="resources/js/respond.min.js"></script>
     <![endif]-->

	<!-- Bootstrap core JavaScript
	     ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="resources/js/jquery.js"></script>
	<script src="resources/js/jquery-2.0.3.min"></script>
	<script src="resources/js/bootstrap.min.js"></script>
	<script src="resources/js/jquery.maskedinput.js"></script>
	<script src="resources/js/barra.js"></script>

	<!--Mascara do Campo Input barra de navegacao-->
	<script type="text/javascript">
		jQuery(function($) {
			});
	
		$('#myModal').modal(options);
	
		function entrar() {
			if (validaCampos()){
				document.getElementById("formLogin").action = "Autenticar";
				document.getElementById("formLogin").submit();
			}
		}

		function validaCampos(){

			if (document.getElementById("j_username").value == ""){
				alert("Por favor, preencha o campo Login.");
				document.getElementById("j_username").focus();
				return false;
			}
			if (document.getElementById("j_passowrd").value == ""){
				alert("Por favor, preencha o campo Senha.");
				document.getElementById("j_passowrd").focus();
				return false;
			}
		}
		
	</script>
	<style type="text/css">
		.alert-login {
			margin: 10px auto 0 !important;
			max-width: 330px !important;
			background-color: #f8f8f8 !important;
			border-color: #e5e5e5 !important;
			color: #777777 !important;
		}
	</style>
	
</head>
<body>
	<div class="navbar navbar-default navbar-fixed-top">
		
		<p class="bismart"><strong>BI</strong>Smart Fiscal</p>
		
	</div>
	
	
	<!-- Main jumbotron for a primary marketing message or call to action -->
	<div class="container">
		<div style="margin-left:37%" class="semBorda">
			<%if (request.getAttribute("r") != null) {%>
				<p style="padding:0 0 15px 0;color:#d9534f;">Login e/ou senha inválidos.</p>
			<%}%>
		</div>
		
		<form action="#" method="post" id="formLogin" style="max-width:300px;"  class="form-signin fundoCinza-conteudo">
				
			<table cellpadding="0" style="width:250px;" cellspacing="0" class="semBorda">
				
				<tr>
					<td style="text-align:center;">
						<input style="width:270px;" placeholder="Usuário" type="text" class="form-control" name="j_username" id="j_username" autofocus />
					</td>
				</tr>
				<tr>
					<td style="height: 2px;">&nbsp;</td>
				</tr>
				<tr>
					<td style="text-align:center;"><input type="password" placeholder="Senha" name="j_passowrd" id="j_passowrd"
						class="form-control" /></td>
				</tr>
				
				<tr>
					<td style="height: 2px;">&nbsp;</td>
				</tr>
			</table>
			
			<a href="#" onclick="entrar()"
				class="btn btn-lg btn-primary btn-block"
				style="color: #ffffff !important;">Entrar</a>

			<!-- Button trigger modal -->
			<a data-toggle="modal" href="#myModal"
				style="margin-top: 10px; display: block;">Esqueceu sua senha?</a>
		</form>
	</div>
	<!-- /container -->
</body>
</html>