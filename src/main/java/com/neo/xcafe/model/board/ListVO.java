package com.neo.xcafe.model.board;

import java.util.List;
// #0012 : BoardList & Paging
// #0018 : PagingBean 추가
public class ListVO {
    private List<BoardVO> list;
    private PagingBean pagingBean;

    public ListVO() {
        super();
    }

    public ListVO(List<BoardVO> list, PagingBean pagingBean) {
        this.list = list;
        this.pagingBean = pagingBean;
    }

    public List<BoardVO> getList() {
        return list;
    }

    public void setList(List<BoardVO> list) {
        this.list = list;
    }

    public PagingBean getPagingBean() {
        return pagingBean;
    }

    public void setPagingBean(PagingBean pagingBean) {
        this.pagingBean = pagingBean;
    }

    @Override
    public String toString() {
        return "ListVO{" +
                "list=" + list +
                ", pagingBean=" + pagingBean +
                '}';
    }
}
