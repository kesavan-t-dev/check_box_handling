function checkall() {
    document.querySelectorAll('.check_all').forEach(cb => cb.checked = true);

}
        
function uncheckall() {
    document.querySelectorAll('.check_all').forEach(cb => cb.checked = false); 

}
        
function reverse() {
    document.querySelectorAll(".check_all").forEach(cb => cb.checked = !cb.checked);
}


