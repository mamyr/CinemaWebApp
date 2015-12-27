/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cinema.services;

import javax.persistence.EntityManager;
import cinema.entities.Bookinfo;
import java.net.URI;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import javax.persistence.Query;
import javax.persistence.PersistenceContext;
import javax.persistence.TemporalType;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ZhanatK
 */
@Path("cinema.entities.bookinfo")
@com.sun.jersey.spi.resource.Singleton
@com.sun.jersey.api.spring.Autowire
public class BookinfoRESTFacade {
    @PersistenceContext(unitName = "CinemaWebAppPU")
    protected EntityManager entityManager;

    public BookinfoRESTFacade() {
    }

    @POST
    @Path("{month}/{day}/{year}")
    @Consumes({"application/json"})
    @Transactional
    public void create(@PathParam("month") String m, @PathParam("day") String d, @PathParam("year") String y, Bookinfo entity) {
        entityManager.persist(entity);
        entityManager.flush();
       // return Response.created(URI.create(m+"/"+d+"/"+y+"/"+entity.getId().toString())).build();
    }

    @PUT
    @Path("{month}/{day}/{year}")
    @Consumes({"application/json"})
    @Transactional
    public void edit(@PathParam("month") String m, @PathParam("day") String d, @PathParam("year") String y, Bookinfo entity) {
        entityManager.merge(entity);
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public void remove(@PathParam("id") Integer id) {
        Bookinfo entity = entityManager.getReference(Bookinfo.class, id);
        entityManager.remove(entity);
    }

    @GET
    @Path("{month}/{day}/{year}/{id}")
    @Produces({"application/json"})
    @Transactional
    public Bookinfo find(@PathParam("month") String m, @PathParam("day") String d, @PathParam("year") String y, @PathParam("id") Integer id) {
        return entityManager.find(Bookinfo.class, id);
    }

    @GET
    @Path("{month}/{day}/{year}")
    @Produces({"application/json"})
    @Transactional
    public List<Bookinfo> findAll(@PathParam("month") String m, @PathParam("day") String d, @PathParam("year") String y) {
        SimpleDateFormat format = new SimpleDateFormat();
        format = new SimpleDateFormat("yyyy/MM/dd");
        Date strToDate = new Date();
        try {
            strToDate = format.parse(y+"/"+m+"/"+d);
            System.out.println(strToDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return find(true, -1, -1, strToDate);
    }

    @GET
    @Path("{month}/{day}/{year}/{max}/{first}")
    @Produces({"application/json"})
    @Transactional
    public List<Bookinfo> findRange(@PathParam("month") String m, @PathParam("day") String d, @PathParam("year") String y, @PathParam("max") Integer max, @PathParam("first") Integer first) {
        SimpleDateFormat format = new SimpleDateFormat();
        format = new SimpleDateFormat("yyyy/MM/dd");
        Date strToDate = new Date();
        try {
            strToDate = format.parse(y+"/"+m+"/"+d);
            System.out.println(strToDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return find(false, max, first, strToDate);
    }

    @GET
    @Path("{month}/{day}/{year}/count")
    @Produces("text/plain")
    @Transactional
    public String count(@PathParam("month") String m, @PathParam("day") String d, @PathParam("year") String y) {
        SimpleDateFormat format = new SimpleDateFormat();
        format = new SimpleDateFormat("yyyy/MM/dd");
        Date strToDate = new Date();
        try {
            strToDate = format.parse(y+"/"+m+"/"+d);
            System.out.println(strToDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        try {
            List<Bookinfo> result, newlist = new ArrayList();
            Query query = entityManager.createQuery("SELECT object(o) FROM Bookinfo AS o");
            
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(strToDate);
            Calendar cal2 = Calendar.getInstance();
            
            result = query.getResultList();
            for(Bookinfo b:result){
                cal2.setTime(b.getDate());
                if(cal1.get(Calendar.YEAR)==cal2.get(Calendar.YEAR) && cal1.get(Calendar.MONTH)==cal2.get(Calendar.MONTH) && cal1.get(Calendar.DAY_OF_MONTH)==cal2.get(Calendar.DAY_OF_MONTH))
                    newlist.add(b);
            }
            return String.valueOf(newlist.size());
        } finally {
            entityManager.close();
        }
    }

    private List<Bookinfo> find(boolean all, int maxResults, int firstResult, Date d) {
        try {
            List<Bookinfo> result, newlist = new ArrayList();
            
            Query query = entityManager.createQuery("SELECT object(o) FROM Bookinfo AS o");
            
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(d);
            Calendar cal2 = Calendar.getInstance();
            
            result = query.getResultList();
            for(Bookinfo b:result){
                cal2.setTime(b.getDate());
                if(cal1.get(Calendar.YEAR)==cal2.get(Calendar.YEAR) && cal1.get(Calendar.MONTH)==cal2.get(Calendar.MONTH) && cal1.get(Calendar.DAY_OF_MONTH)==cal2.get(Calendar.DAY_OF_MONTH))
                    newlist.add(b);
            }
            
            if (!all) {
                newlist = newlist.subList(firstResult, firstResult+maxResults);
                //query.setMaxResults(maxResults);
                //query.setFirstResult(firstResult);
            }
            
            return newlist;
        } finally {
            entityManager.close();
        }
    }
    
}
