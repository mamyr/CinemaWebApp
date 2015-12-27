/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cinema.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ZhanatK
 */
@Entity
@Table(name = "t_seatmap")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Seatmap.findAll", query = "SELECT s FROM Seatmap s"),
    @NamedQuery(name = "Seatmap.findById", query = "SELECT s FROM Seatmap s WHERE s.id = :id"),
    @NamedQuery(name = "Seatmap.findByIdMap", query = "SELECT s FROM Seatmap s WHERE s.idMap = :idMap"),
    @NamedQuery(name = "Seatmap.findByWidthNo", query = "SELECT s FROM Seatmap s WHERE s.widthNo = :widthNo"),
    @NamedQuery(name = "Seatmap.findByLengthNo", query = "SELECT s FROM Seatmap s WHERE s.lengthNo = :lengthNo"),
    @NamedQuery(name = "Seatmap.findByPrice", query = "SELECT s FROM Seatmap s WHERE s.price = :price")})
public class Seatmap implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "id_map")
    private int idMap;
    @Column(name = "width_no")
    private Integer widthNo;
    @Column(name = "length_no")
    private Integer lengthNo;
    @Column(name = "price")
    private Integer price;

    public Seatmap() {
    }

    public Seatmap(Integer id) {
        this.id = id;
    }

    public Seatmap(Integer id, int idMap) {
        this.id = id;
        this.idMap = idMap;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getIdMap() {
        return idMap;
    }

    public void setIdMap(int idMap) {
        this.idMap = idMap;
    }

    public Integer getWidthNo() {
        return widthNo;
    }

    public void setWidthNo(Integer widthNo) {
        this.widthNo = widthNo;
    }

    public Integer getLengthNo() {
        return lengthNo;
    }

    public void setLengthNo(Integer lengthNo) {
        this.lengthNo = lengthNo;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Seatmap)) {
            return false;
        }
        Seatmap other = (Seatmap) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "cinema.entities.Seatmap[ id=" + id + " ]";
    }
    
}
