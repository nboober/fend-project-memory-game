        //Ready Method//            //All javascript behavior should be wrapped in this behavior. This method makes it so that the web page is rendered in the browser before any jquery code is executed
                                    //This method prevents errors from occuring
                                    
$(document).ready(() => {
    
    
    
    });

        //Targeting by class//
        
$(document).ready(() => {
    
    $('.class').show();
    
    });

        //Targeting by ID//
        
$(document).ready(() => {
    
    $('#id').show();
    
    });

        //JQuery Objects//
        
$(document).ready(() => {
    
    const $jqueryObject = $('.class');
    
    $jqueryObject.hide();
    
    });

        //Event Handlers//
        
$(document).ready(() => {
    
    const $button = $('#button');
    const $menu = $('.menu');
    
    $button.on('click', () => {         //Here we use .on() to add the click event handler to the $button element
        
        $menu.toggle();                   //Inside the callback function we use the .toggle() method to show and hide the the $menu object
        
        });
    
    });


        //Effects//
        
//Show, Hide and Toggle have already been demonstarted above

            //Fade//
            
        $(document).ready(() => {
            
            $('#fadeButton').on('click', () => {            //Whenever fadeButton is pressed
                
                $('#fade').fadeToggle(1000);                //Toggle the fade of "fade" in or out over 1000milliseconds or 1 second. .fadeIn or .FadeOut is the other alternative
                
                });
            
            });
        
            //Slide//
            
        $(document).ready(() => {
            
            $('#slideButton').on('click', () => {           //Whenever slideButton is pressed
                
                $('#slide').slideToggle(1000);              //Toggle the slide of "slide" up or down over 1000milliseconds or 1 second. .slideUp or .slideDown is the other alternative
                
                });
            
            });
        
        //Mouse Events//
        
            //mouseenter / mouseleave
        
            $(document).ready(()=>{                         //mouseenter and mouseleave chained events. These events can also be seperated 
                
                $('.mEnterExit').on('mouseenter', ()=>{
                    
                    $('.mPhoto').show();
                    
                    }).on('mouseleave', ()=>{
                    
                    $('.mPhoto').hide();
                    
                    });
                
                });
            
            //addClass / currentTarget
            
            $(document).ready(()=>{                           /*addClass and removeClass remove or add a class to the thing you want to edit.
                                                               *In this case the class that was added increases the size of the image when hovered over.
                                                               *This gives the image a zoomed effect. The class is then removed when the mouse is removed from the image, returning the image to normal
                                                               *toggleClass() is another alternative to addClass and removeClass*/
                
                $('.sPhoto').on('mouseenter', (event)=>{                //In this case an event object needs to be created on mouseenter and mouseleave
                    
                    $(event.currentTarget).addClass('photo-active');    /*This is because the currentTarget attribute is called from the event instead of the class that the image is associated with.
                                                                         *This makes it so that only the current target gets the addClass/ removeClass.
                                                                         *Otherwise all the images with the class of .sPhoto would get the zoomed effect and we dont want that
                                                                         */
                                                                        
                    
                    }).on('mouseleave', (event)=>{
                    
                    $(event.currentTarget).removeClass('photo-active');
                    
                    });
                
                });
            
        //Style Methods
        
            //CSS/ animate
            
            $(document).ready(()=>{
                
                $('.green').on('mouseenter', ()=>{
                    
                    $('.green').css({backgroundColor: 'green',
                                    color: 'white'});
                    
                    $('.green').animate({fontSize: '24px'}, 200).on('mouseleave',()=>{
                        
                        $('.green').css({backgroundColor: 'white',                   /*The curly brackets allow for multiple css properties to be changes at once.
                                                                                     *Property names can only be written using camelCase*/
                                        color: 'black'});
                        
                        $('.green').animate({fontSize: '18px'}, 200);                 /*Animate allows the change of css properties but over a period of time.
                                                                                      *In this case the font size is changed from 18 to 24px over 200milliseconds*/
                        
                        });
                    
                    });
                
                });
            
        //Traversing the DOM
        
            //Children                                                  //When the children method is called, only the children of the parent event are effected by the effect method.
                                                                        //In this case all the children of the .parent class are toggled when the parent class is clicked on
            
            $(document).ready(()=>{
                
                $('.parent').on('click', (event)=>{
                    
                    $(event.currentTarget).children().toggle();
                    
                    });
                
                });
            
            //Parent/Siblings                                           //Like the children method. The parent and sibling method can also be used.
                                                                        //In this case when the child class is clicked or hovered over, the parent is toggled or siblings of the selected child are hidden
            
            $(document).ready(()=>{
                
                $('.child').on('click', (event)=>{
                    
                    $(event.currentTarget).parent().toggle();
                                        
                    }).on('mouseenter',()=>{
                    
                    $(event.currentTarget).siblings().toggle();
                    
                    });
                
                });
            
            //Closest                                                   //The closest method only targets the closest target up the DOM from the selected variable
                                                                        //In this case, when child class closest is clicked, the closest parent-2 class up the DOM will have a fadeToggle
            
            $(document).ready(()=>{
                
                $('.closest').on('click', (event)=>{
                    
                    $(event.currentTarget).closest('.parent-2').fadeToggle();
                    
                    });
                
                });
            
            //Next/Previous                                             //The prev() and next() methods only effect the previous or next sibling in the DOM
                                                                        //In this case when parent-3 is clicked it fade Toggles the previous parent. In this case parent-2 is fadeToggled
            
            $(document).ready(()=>{
                
                $('.parent-3').on('click', (event)=>{
                    
                    $(event.currentTarget).prev().fadeToggle();
                    
                    });
                                
                });
            
            //Find                                                      //The find() method is very similar to the children() method in that it only targets the children of the current Method.
                                                                        //Instead of effecting all the children in the DOM tho, only the specified class in the find method is effected. This can also traverse other children (grand-children) of the parent
            
            $(document).ready(()=>{
                
                $('.parent-3').on('click', (event)=>{
                    
                    $(event.currentTarget).find('.found').fadeToggle();
                    
                    });
                                
                });