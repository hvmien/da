<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<script src = "../Scripts/jquery-2.1.4.js" type = "text/javascript"></script>
<script type = "text/javascript" >
	$(document).ready(function() {
			//Process button
		$('.btnCart').click(function () 
				{
			$.ajax ({
					type: "GET",
					header: {
						Accept: "application/json;charset=utf-8",
						"Content-Type" : "application/json;charset=utf-8"
						},
					url : '${pageContext.request.contextPath}/getTotal',
					success : function(response){
						var result = response.tongtien;
				}
			});
		});
	})
</script>

<div class="shopping-item">

    <a href="/DoAn2/CartIndex">Giỏ hàng - <span class="cart-amunt">${total } đ</span> <i class="fa fa-shopping-cart"></i> <span class="product-count" id="totalCount">${soSP}</span></a>

</div>
