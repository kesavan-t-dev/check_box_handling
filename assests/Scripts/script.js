function check_all() {
    document.querySelectorAll('.check_all').forEach(cb => cb.checked = true);

}
        
function uncheck_all() {
    document.querySelectorAll('.check_all').forEach(cb => cb.checked = false); 

}
        
function reverse() {
    document.querySelectorAll(".check_all").forEach(cb => cb.checked = !cb.checked);
}


