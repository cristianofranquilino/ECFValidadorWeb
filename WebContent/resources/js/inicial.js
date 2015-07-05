
jQuery.noConflict();

(function($) { 
	
	var objAnterior = null;
	
	$(document).on('keyup', '.input-valor-percent', function(){  		
	   	$(this).autoNumeric({aSep: '.', aDec: ',', vMax: '999.99'});
	   	
	   	if ($(this).autoNumeric('get') > 100.0){
			alert("Valor superior ao permitido.\nValor máximo: 100,00.");
			$(this).val("");
	   	}
    });
	
	$(document).on('keypress', '.input-valor-monetario', function(){  		
	   	$(this).autoNumeric({aSep: '.', aDec: ',', vMax: '999999999999999999.99'});
    });
	
	$(document).on('keypress', '.input-valor-pasta', function(){  
		$(this).autoNumeric({aSep: '.', aDec: ',', vMax: '999999999999999999.99'});
    });
	
	$(document).on('change', '.input-valor-pasta', function(){  
	   	var thisObj = $(this);
	   	calcParentElements(thisObj.attr('alt'));
    });
	
	$(document).on('mouseover', '.informativo', function(event){  
		
		var objDescricao = $(this).attr('title');
		var retorno = [];
		
		retorno[0] = $('#'+ objDescricao).val().toString() + "<br />";
		
		var proximoObjeto = $('#' + $('#'+ objDescricao).attr('title'));
		
		var i = 1;
		
		for (;;){
			
			if (proximoObjeto.val() == undefined)
				break;
			
			retorno[i] += proximoObjeto.val() + "<br />" ;
			
			proximoObjeto = $('#' + proximoObjeto.attr('title'));
			
			i++;
		}
		
		var strHint = "";
		
		for(var j=(retorno.length-1); j>=0;j--)
			strHint += getSpacoNivel((retorno.length-j)) + retorno[j].toString().replaceAll("undefined", "");
		
		$(this).qtip({
	        overwrite: false, // Make sure the tooltip won't be overridden once created
	        content: {
	        	title: 'Hierarquia',
	            text: strHint
	        },
	        show: {
	            event: event.type, // Use the same show event as the one that triggered the event handler
	            ready: true, // Show the tooltip as soon as it's bound, vital so it shows up the first time you hover!
	            delay: 1000
	        },
	        style: {
	            classes: 'qtip-blue qtip-shadow hint'
	        },
	        position: {
	            at: 'top center',
	            my: 'bottom center'
	        }
	    }, event); // Pass through our original event to qTip
		   			   	
    });
	
	$(document).on('mouseout', '.informativo', function(){  
		
	   	var thisObj = $(this);
	   	thisObj.closest("tr").removeClass('selected');
	   	
   		var idSuperior = thisObj.attr('title');
	   	
	   	var arrayItems = $("input[accesskey='" + idSuperior + "']");
	   	
	   	jQuery.each(arrayItems, function( key, value ) {
	   	  $(value).closest("tr").removeClass("selected");
	   	});
	   	
    });
	
	
	function getStringParent(valParametro, objSuperior){
		if (objSuperior.val() != undefined){
			valorRetorno.toString() + objSuperior.val().toString() + "\n";
			
		}else{
			return valorRetorno;
		}
	}
	
	
	function calcParentElements(strAtrribute){
		/* txt_#{coluna.id}_#{item.id} */
		var i;
		var arrayItems = $("input[alt='" + strAtrribute + "']");
		var inputObject;
		var nextElement;
		var inputParentObject = "input[accesskey='" + strAtrribute + "']";
		var somaSuperior = 0.0;
		
		if ((arrayItems.length > 0) && ($(inputParentObject) != undefined)){
			
			nextElement = $(inputParentObject).attr('alt'); //Próximo Elemento a ser calculado recursivamente.
			
			for (i=0;i<arrayItems.length;i++){
	    		
				inputObject = arrayItems[i]; 
	    		somaSuperior += doubleConverter(inputObject.value);
	    	}
			
			$(inputParentObject).val(0);
			$(inputParentObject).autoNumeric({aSep: '.', aDec: ',', wEmpty: 'zero', vMax: '999999999999999999.99'});
			$(inputParentObject).autoNumeric('set', somaSuperior);
			
			if ($("input[accesskey='" + nextElement + "']") != undefined)
				calcParentElements(nextElement);
		}
	}
	
	
	
})(jQuery);

function fullPage(toFullPage){
	if (toFullPage){
		$('.west').addClass("fullPageWest");
		$('.marginPagina').addClass("fullPageCenter");
		$('#telaMinBtn').css('display', 'inline');
		$('#telaMaxBtn').css('display', 'none');
	}else{
		$('.west').removeClass("fullPageWest");
		$('.marginPagina').removeClass("fullPageCenter");
		$('#telaMinBtn').css('display', 'none');
		$('#telaMaxBtn').css('display', 'inline');
	}
}

function doubleConverter(str){
	str = str.replaceAll(".","");
	str = str.replaceAll(",",".");
	if (str == "" || str == null)
		str = "0";	
	return parseFloat(str);
}

String.prototype.replaceAll = function(de, para){
    var str = this;
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}

$(document).ready(function () {
	 function teste(){
			alert("teste");
			 //$('#divModal').dialog({modal: true, autoOpen : true});
		}
	  
});

function getSpacoNivel(nivel){
	var espaco = "";
	for (var i = 0; i< nivel;i++){
		espaco += "&nbsp;&nbsp;";
	}
	return espaco + "<img src='../../../resources/img/blue_arrow_10x10.png' style='margin-bottom:3px;' /> ";
}