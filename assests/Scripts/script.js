function check_all() {
    document.querySelectorAll('.check_all').forEach(cb => cb.checked = true);

}
        
function unchec_kall() {
    document.querySelectorAll('.check_all').forEach(cb => cb.checked = false); 

}
        
function reverse() {
    document.querySelectorAll(".check_all").forEach(cb => cb.checked = !cb.checked);
}


