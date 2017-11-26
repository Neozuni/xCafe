

//팝업 저장후 리스트갱신
refreshList = function(type){
    deletePopup("layerPopup1");
    location.reload();
}


//상품 삭제 처리
    $(document).on('click', '#btn_Dell', function(){

        if(confirm("묶음 상품 해재를 진행 하시겠습니까 ?")){
            var param = new Object();
            param.prdId = jQuery("#prdId").val();


            $.ajax({
                url: "/elevenProductMarge/productDel",
                type:"POST",
                data:JSON.stringify(param),
                dataType:"JSON",
                contentType: "application/json; charset=UTF-8",
                success : function(data){
                    //AJAX성공 했을때 동작
                    if(data.result =="SUCCESS"){
                        alert("정상적으로 요청이 처리되었습니다");
                    }else{
                        alert("상품삭제 처리가 실패 하였습니다");
                    }


                },
                error : function(request,status,error) {
                    //AJAX실패 했을때 동작
                    alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                    alert("서버와 통신중 에러가 발생하였습니다.");
                    return false;
                }

            });
        }
    });
//상품 삭제 처리
    $(document).on('click', '#btn_Dell2', function(){

        if(confirm("묶음 상품 해재를 진행 하시겠습니까 ?")){
            var param = new Object();
            param.prdId = jQuery("#prdId").val();


            $.ajax({
                url: "/elevenProductMarge/productDel",
                type:"POST",
                data:JSON.stringify(param),
                dataType:"JSON",
                contentType: "application/json; charset=UTF-8",
                success : function(data){
                    //AJAX성공 했을때 동작
                    if(data.result =="SUCCESS"){
                        alert("정상적으로 요청이 처리되었습니다");
                    }else{
                        alert("상품삭제 처리가 실패 하였습니다");
                    }


                },
                error : function(request,status,error) {
                    //AJAX실패 했을때 동작
                    alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                    alert("서버와 통신중 에러가 발생하였습니다.");
                    return false;
                }

            });
        }
    });
    //상품 상태 변경 처리
    $(document).on('click', '#btn_upDate', function(){
        if(jQuery("#sendState").val() == 'A'){
            alert("해당 상품은 카테고리 및 해쉬코드 맵핑이 안되어서 상태변경 처리를 할 수 없습니다");
            return;
        }


        if(jQuery("#productNoti").val() == '0'){
            alert("상품 유형을 선택 하지 않으면 상태변경 처리를 할 수 없습니다");
            return;
        }

        var param = new Object();
        param.sendState = jQuery("#sendState").val();
        param.prdId = jQuery("#prdId").val();
        param.productState = jQuery("#changeState").val();
        param.productNoti = jQuery("#productNoti").val();

        $.ajax({
            url: "/elevenProductMarge/productStateUpdate",
            type:"POST",
            data:JSON.stringify(param),
            dataType:"JSON",
            contentType: "application/json; charset=UTF-8",
            success : function(data){
                //AJAX성공 했을때 동작
                if(data.result =="SUCCESS"){
                    alert("정상적으로 상태 변경이 처리되었습니다");
                    refreshList();
                }else{
                    alert("상태 변경 처리가 실패 하였습니다");
                }


            },
            error : function(request,status,error) {
                //AJAX실패 했을때 동작
                alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                alert("서버와 통신중 에러가 발생하였습니다.");
                return false;
            }

        });
    });


